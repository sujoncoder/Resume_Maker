import Link from 'next/link';
import PropTypes from 'prop-types';

const Pinkbtn = ({ label, href, width }) => {
    const commonStyles = 'py-2 px-6 text-blue-400 font-md rounded border-2 border-blue-200 duration-500 active:bg-blue-600';

    if (href) {
        return (
            <Link
                href={href}
                className={`${commonStyles} ${width}`}
            >
                {label}
            </Link>
        );
    }

    return <button className={`${commonStyles} ${width}`}>{label}</button>;
};

Pinkbtn.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    width: PropTypes.string,
};

export default Pinkbtn;