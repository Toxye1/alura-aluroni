import { Prato } from "types/prato";
import style from "./tagsPrato.module.scss";
import classNames from "classnames";

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div className={style.tags}>
      <div
        className={classNames({
          [style.tags__tipo]: true,
          [style[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={style.tags__porcao}>{size}g</div>

      <div className={style.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={style.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
