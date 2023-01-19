import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return(
        <>
            <h2>{title}</h2>
            {children}
        </>
    )
}

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default Section;