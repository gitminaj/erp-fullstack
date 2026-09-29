import Button from 'react-bootstrap/Button';

const HeaderWithButton = ({ title, buttonLabel, onButtonClick }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {title}
      </h2>
      <nav>
        <div className="flex items-center gap-2">
          <Button
            className=" text-white p-3 dark:bg-white dark:text-black"  style={{ backgroundColor: '#152238' }}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default HeaderWithButton;
