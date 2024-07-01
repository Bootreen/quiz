import { clsx } from "clsx";

export const ProgressBar = ({ current, total, indicatorTemplate, palette }) => {
  return (
    <>
      <div
        className={clsx(
          "progress-indicatior",
          palette,
          current === 0 && "turned-off"
        )}
      >
        {indicatorTemplate
          .split("|")
          .map((element) =>
            element === "{current}"
              ? current
              : element === "{total}"
              ? total
              : element
          )}
      </div>
      <div className={"progress-bar " + palette}>
        {new Array(total).fill(0).map((_, id) => (
          <div
            key={id}
            className={clsx(
              "progress-bit",
              palette,
              id <= current - 1 && "bit-active",
              id === current - 1 && "bit-last"
            )}
          ></div>
        ))}
      </div>
    </>
  );
};
