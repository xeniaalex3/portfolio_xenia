export interface MenuLinksProps {
  path: string;
  name: string;
  id: string;
  focus: boolean;
  pathname: string;
  isOpen?: boolean,
  onClose?: () => void;
}