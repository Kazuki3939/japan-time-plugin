export default function handler(req, res) {
  const now = new Date();

  const jst = now.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    hour12: false,
  });

  res.status(200).json({ jst_time: jst });
}
