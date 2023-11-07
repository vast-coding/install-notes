// we want autocomplete and to
type IconType =
  | "application"
  | "settings"
  | "user"
  | "trash"
  | "profile"
  | (string & {}); // needed so string doesn't remove autocomplete.

type IconProps = { icon: IconType };

const Icon = ({ props }: IconProps) => {
  return null;
};

const App = () => (
  <div>
    <Icon icon="" />
  </div>
);
