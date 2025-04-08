'use client'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="flex flex-row justify-center items-center py-4">
      <div>
        <p className="font-light md:text-sm text-[var(--text-primary)] xs:text-xs">
          © {year} - All rights reserved - Xenia Dev
        </p>
      </div>
    </footer>
  )
}

export default Footer
