import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-5xl">
          Ready to monitor your workflows?
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-slate-400">
        Self-hosted workflow observability for n8n. Deploy in minutes with Docker.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="https://github.com/philipphaunstetter/n8n-analytics">
          View on GitHub
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-slate-400">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-white data-hover:text-slate-300"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Product</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/pricing">Pricing</SitemapLink>
          <SitemapLink href="/#features">Features</SitemapLink>
          <SitemapLink href="/#use-cases">Use Cases</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Resources</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/blog">Blog</SitemapLink>
          <SitemapLink href="https://github.com/philipphaunstetter/n8n-analytics">GitHub</SitemapLink>
          <SitemapLink href="https://github.com/philipphaunstetter/n8n-analytics/blob/main/docs/prd.md">Documentation</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Support</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://github.com/philipphaunstetter/n8n-analytics/issues">Community</SitemapLink>
          <SitemapLink href="mailto:support@elova.io">Contact</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Legal</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">Terms of service</SitemapLink>
          <SitemapLink href="#">Privacy policy</SitemapLink>
          <SitemapLink href="/imprint">Imprint</SitemapLink>
          <SitemapLink href="/accessibility-statement">Accessibility Statement</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-slate-400 data-hover:text-slate-300"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        aria-label="Visit us on X"
        className="text-slate-400 data-hover:text-slate-300"
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-slate-400 data-hover:text-slate-300"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-slate-400">
      &copy; {new Date().getFullYear()} Elova
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-slate-900">
      <Container>
        <CallToAction />
        <div className="pb-16">
          <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8 border-t border-white/10 pt-16">
            <div className="col-span-2 flex">
              <div className="pt-6 lg:pb-6">
                <Logo className="h-9" />
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
              <Sitemap />
            </div>
          </div>
          <div className="flex justify-between border-t border-white/10 py-6">
            <div>
              <div className="py-3">
                <Copyright />
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center gap-8 py-3">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
