import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './Quiz.module.scss'
import classNames from 'classnames';
import { Variant, Variants } from '../../App';

type Props = {
    variants: Variants,
    activeVariant?: Variant,
    handleChange: (value: Variant) => void
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Quiz: FC<Props> = ({
    variants,
    activeVariant,
    handleChange,
}) => {
    return (
        <div className={styles.quiz}>
            <h1 className={styles.quiz__heading}>Название страны, которой присвоен статус - родина хоккея на льду?</h1>

            <ol className={styles.quiz__list}>
                {variants.map(({ label, value }) => (
                    <li
                        key={value}
                        className={classNames(
                            "appearanceAnimation",
                            {
                                [styles.active]: activeVariant === value
                            }
                        )}
                        onClick={() => handleChange(value)}
                    >
                        {label}
                    </li>
                ))}
            </ol>
        </div>
    )
}