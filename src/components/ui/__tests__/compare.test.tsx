import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Compare } from '../compare'

// BDD Test Suite for Compare Component
// Risk Level: HIGH (Complex mouse events, state management, mathematical calculations)
// Business Impact: HIGH (Core interactive feature)

describe('Compare Component - BDD Test Suite', () => {
  const defaultProps = {
    firstImage: 'https://example.com/first.jpg',
    secondImage: 'https://example.com/second.jpg',
    className: 'test-compare',
  }

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks()
  })

  describe('Feature: Component Initialization and Rendering', () => {
    describe('Given a Compare component with valid image URLs', () => {
      it('When the component renders, Then it should display both images with proper labels', () => {
        render(<Compare {...defaultProps} />)
        
        // Verify both images are rendered
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)
        expect(images[0]).toHaveAttribute('src', defaultProps.firstImage)
        expect(images[1]).toHaveAttribute('src', defaultProps.secondImage)
        
        // Verify labels are present
        expect(screen.getByText('Full Band')).toBeInTheDocument()
        expect(screen.getByText('Acoustic')).toBeInTheDocument()
      })

      it('When the component renders, Then it should initialize with 50% slider position', () => {
        render(<Compare {...defaultProps} />)
        
        // The slider should be positioned at 50% by default
        const slider = screen.getByRole('generic').querySelector('.absolute.top-0.bottom-0')
        expect(slider).toHaveStyle({ left: '50%' })
      })

      it('When custom CSS classes are provided, Then they should be applied correctly', () => {
        const customProps = {
          ...defaultProps,
          firstImageClassName: 'custom-first',
          secondImageClassname: 'custom-second',
          className: 'custom-container',
        }
        
        const { container } = render(<Compare {...customProps} />)
        expect(container.firstChild).toHaveClass('custom-container')
      })
    })
  })

  describe('Feature: Hover Mode Interaction (Default Behavior)', () => {
    describe('Given a Compare component in hover mode', () => {
      it('When user hovers over the component, Then the slider should follow mouse position', async () => {
        const user = userEvent.setup()
        render(<Compare {...defaultProps} />)
        
        const container = screen.getByRole('generic').parentElement
        
        // Mock getBoundingClientRect to return predictable values
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Simulate mouse move to 25% position (200px out of 800px)
        fireEvent.mouseMove(container!, { clientX: 200, clientY: 300 })
        
        await waitFor(() => {
          const slider = container!.querySelector('.absolute.top-0.bottom-0')
          expect(slider).toHaveStyle({ left: '25%' })
        })
      })

      it('When user leaves the component, Then the slider should return to center position', async () => {
        render(<Compare {...defaultProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Move mouse to different position
        fireEvent.mouseMove(container!, { clientX: 600, clientY: 300 })
        
        // Then leave the component
        fireEvent.mouseLeave(container!)
        
        await waitFor(() => {
          const slider = container!.querySelector('.absolute.top-0.bottom-0')
          expect(slider).toHaveStyle({ left: '50%' })
        })
      })
    })
  })

  describe('Feature: Click Mode Interaction', () => {
    describe('Given a Compare component in click mode', () => {
      const clickModeProps = { ...defaultProps, slideMode: 'click' as const }

      it('When user hovers without clicking, Then the slider should not move', () => {
        render(<Compare {...clickModeProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Hover should not trigger movement in click mode
        fireEvent.mouseMove(container!, { clientX: 200, clientY: 300 })
        
        const slider = container!.querySelector('.absolute.top-0.bottom-0')
        expect(slider).toHaveStyle({ left: '50%' })
      })

      it('When user clicks and drags, Then the slider should follow mouse position', async () => {
        render(<Compare {...clickModeProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Start dragging
        fireEvent.mouseDown(container!)
        fireEvent.mouseMove(container!, { clientX: 300, clientY: 300 })
        
        await waitFor(() => {
          const slider = container!.querySelector('.absolute.top-0.bottom-0')
          expect(slider).toHaveStyle({ left: '37.5%' })
        })

        // Stop dragging
        fireEvent.mouseUp(container!)
      })

      it('When user releases mouse, Then dragging should stop', () => {
        render(<Compare {...clickModeProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Start and stop dragging
        fireEvent.mouseDown(container!)
        fireEvent.mouseUp(container!)
        
        // Mouse move after release should not affect slider
        const sliderPositionBefore = container!.querySelector('.absolute.top-0.bottom-0')?.style.left
        fireEvent.mouseMove(container!, { clientX: 600, clientY: 300 })
        const sliderPositionAfter = container!.querySelector('.absolute.top-0.bottom-0')?.style.left
        
        expect(sliderPositionBefore).toBe(sliderPositionAfter)
      })
    })
  })

  describe('Feature: Boundary Conditions and Edge Cases', () => {
    describe('Given various edge case scenarios', () => {
      it('When mouse position is beyond left boundary, Then slider should be clamped to 0%', () => {
        render(<Compare {...defaultProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 100,
          width: 800,
          top: 0,
          height: 600,
          right: 900,
          bottom: 600,
          x: 100,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Mouse position before container start
        fireEvent.mouseMove(container!, { clientX: 50, clientY: 300 })
        
        const slider = container!.querySelector('.absolute.top-0.bottom-0')
        expect(slider).toHaveStyle({ left: '0%' })
      })

      it('When mouse position is beyond right boundary, Then slider should be clamped to 100%', () => {
        render(<Compare {...defaultProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Mouse position beyond container end
        fireEvent.mouseMove(container!, { clientX: 1000, clientY: 300 })
        
        const slider = container!.querySelector('.absolute.top-0.bottom-0')
        expect(slider).toHaveStyle({ left: '100%' })
      })

      it('When container ref is null, Then mouse events should not cause errors', () => {
        // This tests the safety check in handleMouseMove
        const { rerender } = render(<Compare {...defaultProps} />)
        
        // Force container ref to be null by unmounting and remounting
        rerender(<div />)
        
        // This should not throw an error
        expect(() => {
          fireEvent.mouseMove(document.body, { clientX: 400, clientY: 300 })
        }).not.toThrow()
      })
    })
  })

  describe('Feature: Callback Integration', () => {
    describe('Given a Compare component with onSliderMove callback', () => {
      it('When slider position changes, Then callback should be called with correct percentage', () => {
        const mockCallback = jest.fn()
        const callbackProps = { ...defaultProps, onSliderMove: mockCallback }
        
        render(<Compare {...callbackProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Move to 75% position
        fireEvent.mouseMove(container!, { clientX: 600, clientY: 300 })
        
        expect(mockCallback).toHaveBeenCalledWith(75)
      })

      it('When slider position is clamped, Then callback should receive clamped value', () => {
        const mockCallback = jest.fn()
        const callbackProps = { ...defaultProps, onSliderMove: mockCallback }
        
        render(<Compare {...callbackProps} />)
        
        const container = screen.getByRole('generic').parentElement
        container!.getBoundingClientRect = jest.fn(() => ({
          left: 0,
          width: 800,
          top: 0,
          height: 600,
          right: 800,
          bottom: 600,
          x: 0,
          y: 0,
          toJSON: jest.fn(),
        }))

        // Move beyond right boundary
        fireEvent.mouseMove(container!, { clientX: 1200, clientY: 300 })
        
        expect(mockCallback).toHaveBeenCalledWith(100)
      })
    })
  })

  describe('Feature: Accessibility and User Experience', () => {
    describe('Given accessibility requirements', () => {
      it('When component renders, Then images should have proper alt text', () => {
        render(<Compare {...defaultProps} />)
        
        expect(screen.getByAltText('First comparison')).toBeInTheDocument()
        expect(screen.getByAltText('Second comparison')).toBeInTheDocument()
      })

      it('When component renders, Then it should have proper cursor styling for interaction', () => {
        const { container } = render(<Compare {...defaultProps} />)
        
        const compareContainer = container.querySelector('[class*="cursor-col-resize"]')
        expect(compareContainer).toBeInTheDocument()
      })

      it('When slider is at different positions, Then visual feedback should be clear', () => {
        render(<Compare {...defaultProps} />)
        
        // Verify slider handle exists and is visible
        const sliderHandle = screen.getByRole('generic').querySelector('.w-6.h-6.bg-white.rounded-full')
        expect(sliderHandle).toBeInTheDocument()
        
        // Verify slider line exists
        const sliderLine = screen.getByRole('generic').querySelector('.w-1.bg-white')
        expect(sliderLine).toBeInTheDocument()
      })
    })
  })
})