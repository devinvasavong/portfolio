export const metadata = {
    title: 'Projects | Sockey Survey',
    description: 'Socket Survey allows users to connect to a room and answer questions live!',
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