export const metadata = {
    title: 'Projects | Workplace Scheduling (Shiftlist)',
    description: 'Shiftlist is a web application that allows employees to view their schedule and request time off. Managers can create schedules, view employee requests, and approve/deny them.',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
        </>
    )
  }