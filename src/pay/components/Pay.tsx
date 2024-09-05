import type { LifeCycleStatus } from '../../transaction';
import { useIsMounted } from '../../useIsMounted';
import { PayProvider } from './PayProvider';

export function Pay({
  chainId,
  chargeId,
  children,
  className,
  onStatus,
}: {
  chainId: number;
  chargeId: string;
  children: React.ReactNode;
  className?: string;
  onStatus?: (status: LifeCycleStatus) => void;
}) {
  const isMounted = useIsMounted();
  // prevents SSR hydration issue
  if (!isMounted) {
    return null;
  }

  return (
    <PayProvider
      chargeId={chargeId}
      chainId={chainId}
      className={className}
      onStatus={onStatus}
    >
      {children}
    </PayProvider>
  );
}
