import React from 'react'
import styles from './Icons.module.scss';
import PropTypes from 'prop-types';

export default function Icon(props) {

    const { srcImage, widthImage, heightImage, altImage } = props;

    const width = widthImage ? widthImage : 20;
    const height = heightImage ? heightImage : 20;
    const alt = altImage ? altImage : 'Icon';

    return (
        <>
            <div className={styles.socialIcon}>
                <img src={`/icons/${srcImage}`} width={width} height={height} alt={alt} />
            </div>
        </>
    )
}

Icon.propTypes = {
    srcImage: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string
}
