import '../../scss/components/_logosBlock.scss';

import apple from '../../assets/img/logos/Apple.svg';
import samsung from '../../assets/img/logos/Samsung.svg';
import mi from '../../assets/img/logos/xiaomi.svg';
import motorola from '../../assets/img/logos/motorola.svg';
import nokia from '../../assets/img/logos/nokia.svg';

const logosItem = [
    {
        src: apple,
        title: 'Apple',
    },
    {
        src: samsung,
        title: 'Samsung'
    },
    {
        src: mi,
        title: 'Xiaomi'
    },
    {
        src: motorola,
        title: 'Motorola'
    },
    {
        src: nokia,
        title: 'Nokia'
    }
]


const LogosBlock = () => {
    const logosRender = logosItem.map(({src, title}, i) => {
        return (
            <li key={i}>
                <a href="">
                    <img src={src} alt={title} />
                </a>
            </li>
        )
    })

    return (
        <div className="logos__block">
            <ul>
                {logosRender}
            </ul>
        </div>
    )
}

export default LogosBlock;