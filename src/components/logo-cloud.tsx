import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between items-center max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Crehana"
        src="/logo-cloud/crehana.png"
        className="h-8 max-w-24 object-contain max-sm:mx-auto sm:h-7 lg:h-10 lg:max-w-32"
      />
      <img
        alt="AEA"
        src="/logo-cloud/aea.png"
        className="h-8 max-w-24 object-contain max-sm:mx-auto sm:h-7 lg:h-10 lg:max-w-32"
      />
      <img
        alt="Interbank"
        src="/logo-cloud/interbank.png"
        className="h-8 max-w-24 object-contain max-sm:mx-auto sm:h-7 lg:h-10 lg:max-w-32"
      />
      <img
        alt="PUCP"
        src="/logo-cloud/pucp.png"
        className="h-8 max-w-24 object-contain max-sm:mx-auto sm:h-7 lg:h-10 lg:max-w-32"
      />
      <img
        alt="Rimac"
        src="/logo-cloud/rimac.png"
        className="h-8 max-w-24 object-contain max-sm:mx-auto sm:h-7 lg:h-10 lg:max-w-32"
      />
    </div>
  )
}
