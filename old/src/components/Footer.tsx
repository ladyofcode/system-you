import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#f0ebd8] dark:bg-[#151515] text-foreground py-8">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Built with 💛 by</h3>
            <div className="flex items-center space-x-2">
              <p>Tabs</p>
              <Link href="https://x.com/ladyofcode" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 640" className="fill-current">
                  <path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z"/>
                </svg>
              </Link>
              <Link href="https://twitch.tv/ladyofcode" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 439 512.17" className="fill-current"><g fillRule="nonzero"><path fill="#FEFEFE" d="M402.42 237.79l-73.17 73.17h-73.17l-64.02 64.02v-64.02h-82.31V36.59h292.67z"/><path  d="M402.42 237.79l-73.17 73.17h-73.17l-64.02 64.02v-64.02h-82.31V36.59h292.67v201.2zM91.46 0L0 91.46v329.25h109.75v91.46l91.46-91.46h73.16L439 256.08V0H91.46z"/><path d="M310.96 210.35h36.58V100.6h-36.58zM210.35 210.35h36.59V100.6h-36.59z"/></g></svg>
              </Link>
              <Link href="https://linkedin.com/in/ladyofcode" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 509.64" className="fill-current">
                  <path d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
                </svg>
              </Link>
            </div>
            <p>James</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Related projects</h3>
            <Link href="https://realignprogram.com" className="text-foreground hover:font-semibold hover:border-b hover:border-dotted hover:border-current">
              Realign program
            </Link>
          </div>
          <div>
            {/* Empty column */}
          </div>
          <div className="text-right">
            <h3 className="font-bold text-lg mb-2">Info</h3>
            <ul>
              <li><Link href="/about" className="text-foreground hover:font-semibold hover:border-b hover:border-dotted hover:border-current">About</Link></li>
              <li><Link href="/contact" className="text-foreground hover:font-semibold hover:border-b hover:border-dotted hover:border-current">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}