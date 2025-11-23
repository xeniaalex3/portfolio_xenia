'use client'
import { Fragment, useState, useEffect } from "react";

function Footer() {
  const [year, setYear] = useState<number>()

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
 <footer className="flex flex-row justify-center items-center py-4">
      <div>
        <p className="font-light md:text-sm text-[var(--text-primary)] xs:text-xs">
          © {year} - All rights reserved - Xenia Onescu
        </p>
      </div>
    </footer>
    </Fragment>
   
  )
}

export default Footer
