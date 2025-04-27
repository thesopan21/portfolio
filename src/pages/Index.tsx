import { useEffect, useState } from 'react'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(function () {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Loading Portfolio...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      Index here you are pages
    </div>
  )
}

export default Index