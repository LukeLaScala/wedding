import NextLink from 'next/link'

export default function Link({ text, href, active }: { text: string, href: string, active: boolean }) {
  return (
    <NextLink href={href} className="">
      <div className="relative group inline-block px-1">
        <span className={`font-serif text-lg relative z-10 transition-all duration-300 ${active ? 'text-white font-semibold' : 'group-hover:text-white'}`}>{text}</span>
        <div className={`absolute inset-x-0 bottom-0 bg-pink-300 w-full transition-all duration-300 z-0 ${active ? 'h-full' : 'h-[2px] group-hover:h-full'}`} />
      </div>
    </NextLink>
  )
}
