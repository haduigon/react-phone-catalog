import './NoResult.scss';

type Props = {
  headline?: string,
};

export const NoResults: React.FC<Props> = ({
  headline = 'Page not found',
}) => {
  return (
    <div
      className="font-header page-not-found"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '68vh',
      }}
    >
      {headline}
    </div>
  );
};
