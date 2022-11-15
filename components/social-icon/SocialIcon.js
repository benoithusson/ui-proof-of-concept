import React from 'react'
import Image from 'next/image';
import styles from './SocialIcon.module.scss';
import PropTypes from 'prop-types';

export default function SocialIcon(props) {

    const { srcImage, widthImage, heightImage, altImage } = props;

    const width = widthImage ? widthImage : 20;
    const height = heightImage ? heightImage : 20;
    const alt = altImage ? altImage : 'Social icon';

    return (
        <>
            <div className={styles.socialIcon}>
                <Image src={`/icons/${srcImage}`} width={width} height={height} alt={alt} />
            </div>
        </>
    )
}

SocialIcon.propTypes = {
    srcImage: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
}
