export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
