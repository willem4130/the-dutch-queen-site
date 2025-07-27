import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PerformancesSection } from '../performances'

// BDD Test Suite for Performances Section Component
// Risk Level: HIGH (Complex state management, conditional rendering, large data arrays)
// Business Impact: HIGH (Main content section showcasing services)

describe('Performances Section - BDD Test Suite', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Feature: Section Initialization and Layout', () => {
    describe('Given the Performances section loads', () => {
      it('When the component renders, Then it should display the main heading and description', () => {
        render(<PerformancesSection />)
        
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Performances')
        expect(screen.getByText(/Choose the perfect Queen experience/)).toBeInTheDocument()
      })

      it('When the component renders, Then it should have the correct section ID for navigation', () => {
        const { container } = render(<PerformancesSection />)
        
        const section = container.querySelector('section')
        expect(section).toHaveAttribute('id', 'performances')
      })

      it('When the component renders, Then it should initialize with Full Band tab as active', () => {
        render(<PerformancesSection />)
        
        const fullBandButton = screen.getByRole('button', { name: /Full Band Experience/i })
        const acousticButton = screen.getByRole('button', { name: /Acoustic Sessions/i })
        
        // Full Band should have active styling
        expect(fullBandButton).toHaveClass('bg-gradient-to-r', 'from-red-500', 'to-red-600')
        
        // Acoustic should have inactive styling
        expect(acousticButton).toHaveClass('text-gray-400')
      })
    })
  })

  describe('Feature: Tab Navigation Between Performance Types', () => {
    describe('Given the performance type selector', () => {
      it('When user clicks Acoustic Sessions tab, Then the active tab should switch', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        const acousticButton = screen.getByRole('button', { name: /Acoustic Sessions/i })
        const fullBandButton = screen.getByRole('button', { name: /Full Band Experience/i })
        
        await user.click(acousticButton)
        
        // Acoustic should now be active
        expect(acousticButton).toHaveClass('bg-gradient-to-r', 'from-yellow-500', 'to-yellow-600')
        
        // Full Band should now be inactive
        expect(fullBandButton).toHaveClass('text-gray-400')
      })

      it('When user switches tabs multiple times, Then the UI should respond correctly each time', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        const acousticButton = screen.getByRole('button', { name: /Acoustic Sessions/i })
        const fullBandButton = screen.getByRole('button', { name: /Full Band Experience/i })
        
        // Switch to acoustic
        await user.click(acousticButton)
        expect(acousticButton).toHaveClass('from-yellow-500')
        
        // Switch back to full band
        await user.click(fullBandButton)
        expect(fullBandButton).toHaveClass('from-red-500')
        
        // Switch to acoustic again
        await user.click(acousticButton)
        expect(acousticButton).toHaveClass('from-yellow-500')
      })
    })
  })

  describe('Feature: Full Band Experience Content Display', () => {
    describe('Given the Full Band tab is active', () => {
      it('When the component renders, Then it should display Full Band specific content', () => {
        render(<PerformancesSection />)
        
        // Main heading
        expect(screen.getByRole('heading', { level: 3, name: /Full Band Experience/i })).toBeInTheDocument()
        
        // Description
        expect(screen.getByText(/complete Queen experience with full instrumentation/i)).toBeInTheDocument()
        
        // Feature categories
        expect(screen.getByText('Ideal For:')).toBeInTheDocument()
        expect(screen.getByText('Features:')).toBeInTheDocument()
        expect(screen.getByText('Featured Songs:')).toBeInTheDocument()
      })

      it('When Full Band content displays, Then it should show all expected venue types', () => {
        render(<PerformancesSection />)
        
        expect(screen.getByText('• Festivals & Large Venues')).toBeInTheDocument()
        expect(screen.getByText('• Corporate Events')).toBeInTheDocument()
        expect(screen.getByText('• Concert Halls')).toBeInTheDocument()
        expect(screen.getByText('• Stadium Shows')).toBeInTheDocument()
      })

      it('When Full Band content displays, Then it should show all expected features', () => {
        render(<PerformancesSection />)
        
        expect(screen.getByText('• Full Band Setup')).toBeInTheDocument()
        expect(screen.getByText('• Theatrical Production')).toBeInTheDocument()
        expect(screen.getByText('• Complete Light Show')).toBeInTheDocument()
        expect(screen.getByText('• Costume Changes')).toBeInTheDocument()
      })

      it('When Full Band content displays, Then it should show the complete song list', () => {
        render(<PerformancesSection />)
        
        // Check for key songs from the full band repertoire
        expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument()
        expect(screen.getByText('We Will Rock You')).toBeInTheDocument()
        expect(screen.getByText('We Are The Champions')).toBeInTheDocument()
        expect(screen.getByText("Don't Stop Me Now")).toBeInTheDocument()
        expect(screen.getByText('Another One Bites The Dust')).toBeInTheDocument()
      })

      it('When Full Band content displays, Then it should show the performance image with overlay', () => {
        render(<PerformancesSection />)
        
        const performanceImage = screen.getByAltText('Full band performance')
        expect(performanceImage).toBeInTheDocument()
        expect(performanceImage).toHaveAttribute('src', expect.stringContaining('unsplash.com'))
        
        expect(screen.getByRole('heading', { level: 4, name: /Stadium Energy/i })).toBeInTheDocument()
        expect(screen.getByText('Complete Queen experience with full production')).toBeInTheDocument()
      })
    })
  })

  describe('Feature: Acoustic Sessions Content Display', () => {
    describe('Given the Acoustic tab is active', () => {
      it('When user switches to Acoustic tab, Then it should display Acoustic specific content', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        const acousticButton = screen.getByRole('button', { name: /Acoustic Sessions/i })
        await user.click(acousticButton)
        
        await waitFor(() => {
          expect(screen.getByRole('heading', { level: 3, name: /Acoustic Sessions/i })).toBeInTheDocument()
          expect(screen.getByText(/Intimate, stripped-down versions/i)).toBeInTheDocument()
        })
      })

      it('When Acoustic content displays, Then it should show all expected venue types', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        await user.click(screen.getByRole('button', { name: /Acoustic Sessions/i }))
        
        await waitFor(() => {
          expect(screen.getByText('• Private Events')).toBeInTheDocument()
          expect(screen.getByText('• Acoustic Venues')).toBeInTheDocument()
          expect(screen.getByText('• Intimate Gatherings')).toBeInTheDocument()
          expect(screen.getByText('• Special Occasions')).toBeInTheDocument()
        })
      })

      it('When Acoustic content displays, Then it should show all expected features', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        await user.click(screen.getByRole('button', { name: /Acoustic Sessions/i }))
        
        await waitFor(() => {
          expect(screen.getByText('• Acoustic Instruments')).toBeInTheDocument()
          expect(screen.getByText('• Close Interaction')).toBeInTheDocument()
          expect(screen.getByText('• Storytelling')).toBeInTheDocument()
          expect(screen.getByText('• Emotional Connection')).toBeInTheDocument()
        })
      })

      it('When Acoustic content displays, Then it should show the acoustic song list', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        await user.click(screen.getByRole('button', { name: /Acoustic Sessions/i }))
        
        await waitFor(() => {
          expect(screen.getByText('Love Of My Life')).toBeInTheDocument()
          expect(screen.getByText('The Show Must Go On')).toBeInTheDocument()
          expect(screen.getByText('Somebody To Love')).toBeInTheDocument()
          expect(screen.getByText('Bohemian Rhapsody (Unplugged)')).toBeInTheDocument()
          expect(screen.getByText('Who Wants To Live Forever')).toBeInTheDocument()
        })
      })

      it('When Acoustic content displays, Then it should show the acoustic performance image', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        await user.click(screen.getByRole('button', { name: /Acoustic Sessions/i }))
        
        await waitFor(() => {
          const acousticImage = screen.getByAltText('Acoustic performance')
          expect(acousticImage).toBeInTheDocument()
          expect(acousticImage).toHaveAttribute('src', expect.stringContaining('unsplash.com'))
          
          expect(screen.getByRole('heading', { level: 4, name: /Intimate Connection/i })).toBeInTheDocument()
          expect(screen.getByText('Stripped-down Queen classics with emotional depth')).toBeInTheDocument()
        })
      })
    })
  })

  describe('Feature: Content Transitions and Animations', () => {
    describe('Given tab switching animations', () => {
      it('When switching between tabs, Then content should transition smoothly', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        // Initial state - Full Band content should be visible
        expect(screen.getByText('Stadium Energy')).toBeInTheDocument()
        expect(screen.queryByText('Intimate Connection')).not.toBeInTheDocument()
        
        // Switch to Acoustic
        await user.click(screen.getByRole('button', { name: /Acoustic Sessions/i }))
        
        // Wait for transition
        await waitFor(() => {
          expect(screen.getByText('Intimate Connection')).toBeInTheDocument()
          expect(screen.queryByText('Stadium Energy')).not.toBeInTheDocument()
        }, { timeout: 1000 })
      })
    })
  })

  describe('Feature: Call to Action Integration', () => {
    describe('Given the booking call to action', () => {
      it('When the section renders, Then it should display the call to action section', () => {
        render(<PerformancesSection />)
        
        expect(screen.getByRole('heading', { level: 3, name: /Ready to Rock\?/i })).toBeInTheDocument()
        expect(screen.getByText(/Whether you want the full stadium experience/i)).toBeInTheDocument()
      })

      it('When the call to action renders, Then it should have a properly linked booking button', () => {
        render(<PerformancesSection />)
        
        const bookingLink = screen.getByRole('link', { name: /Book Your Performance/i })
        expect(bookingLink).toBeInTheDocument()
        expect(bookingLink).toHaveAttribute('href', '#contact')
      })

      it('When the call to action renders, Then it should include visual arrow icon', () => {
        render(<PerformancesSection />)
        
        const bookingLink = screen.getByRole('link', { name: /Book Your Performance/i })
        const arrowIcon = bookingLink.querySelector('svg')
        expect(arrowIcon).toBeInTheDocument()
      })
    })
  })

  describe('Feature: Data Integrity and Content Validation', () => {
    describe('Given the song lists and content data', () => {
      it('When Full Band tab is active, Then it should display exactly 10 full band songs', () => {
        render(<PerformancesSection />)
        
        // Count the song items in the full band section
        const fullBandSongs = screen.getAllByText(/^(Bohemian Rhapsody|We Will Rock You|We Are The Champions|Don't Stop Me Now|Another One Bites The Dust|Radio Ga Ga|I Want To Break Free|Killer Queen|Fat Bottomed Girls|Crazy Little Thing Called Love)$/)
        expect(fullBandSongs).toHaveLength(10)
      })

      it('When Acoustic tab is active, Then it should display exactly 10 acoustic songs', async () => {
        const user = userEvent.setup()
        render(<PerformancesSection />)
        
        await user.click(screen.getByRole('button', { name: /Acoustic Sessions/i }))
        
        await waitFor(() => {
          const acousticSongs = screen.getAllByText(/^(Love Of My Life|The Show Must Go On|Somebody To Love|Bohemian Rhapsody \(Unplugged\)|Who Wants To Live Forever|Too Much Love Will Kill You|I Want It All \(Acoustic\)|These Are The Days Of Our Lives|Is This The Real Life|The Miracle)$/)
          expect(acousticSongs).toHaveLength(10)
        })
      })

      it('When checking content consistency, Then each performance type should have complete information blocks', () => {
        render(<PerformancesSection />)
        
        // Full Band should have all required content blocks
        expect(screen.getByText('Ideal For:')).toBeInTheDocument()
        expect(screen.getByText('Features:')).toBeInTheDocument()
        expect(screen.getByText('Featured Songs:')).toBeInTheDocument()
      })
    })
  })

  describe('Feature: Responsive Design and Layout', () => {
    describe('Given different screen sizes', () => {
      it('When component renders, Then it should have responsive grid classes', () => {
        const { container } = render(<PerformancesSection />)
        
        const gridContainer = container.querySelector('.grid.lg\\:grid-cols-2')
        expect(gridContainer).toBeInTheDocument()
      })

      it('When component renders, Then tab buttons should have responsive styling', () => {
        render(<PerformancesSection />)
        
        const tabContainer = screen.getByRole('button', { name: /Full Band Experience/i }).parentElement
        expect(tabContainer).toHaveClass('bg-gray-900', 'rounded-full', 'p-2', 'border', 'border-gray-700')
      })
    })
  })

  describe('Feature: Accessibility and Semantic Structure', () => {
    describe('Given accessibility requirements', () => {
      it('When component renders, Then it should have proper heading hierarchy', () => {
        render(<PerformancesSection />)
        
        const mainHeading = screen.getByRole('heading', { level: 2 })
        expect(mainHeading).toHaveTextContent('Our Performances')
        
        const subHeading = screen.getByRole('heading', { level: 3 })
        expect(subHeading).toHaveTextContent('Full Band Experience')
      })

      it('When tab buttons render, Then they should be properly labeled for screen readers', () => {
        render(<PerformancesSection />)
        
        const fullBandButton = screen.getByRole('button', { name: /Full Band Experience/i })
        const acousticButton = screen.getByRole('button', { name: /Acoustic Sessions/i })
        
        expect(fullBandButton).toBeInTheDocument()
        expect(acousticButton).toBeInTheDocument()
      })

      it('When images render, Then they should have descriptive alt text', () => {
        render(<PerformancesSection />)
        
        const performanceImage = screen.getByAltText('Full band performance')
        expect(performanceImage).toBeInTheDocument()
      })
    })
  })
})