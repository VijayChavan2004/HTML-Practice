export function formatDate(isoDateString: string | undefined): string {
  if (!isoDateString) return '';
  const date = new Date(isoDateString);
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric', month: 'short', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  }).format(date);
}
