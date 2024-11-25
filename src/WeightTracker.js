import React, { useState } from 'react';

function WeightTracker() {
  const [weight, setWeight] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (weight.trim() === '' || isNaN(weight)) {
      alert('正しい体重を入力してください');
      return;
    }

    const date = new Date().toLocaleDateString(); // 日付を取得
    setRecords([...records, { date, weight }]); // 新しいデータを追加
    setWeight(''); // 入力フィールドをクリア
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>体重記録アプリ</h1>
      <form onSubmit={handleSubmit}>
        <label>
          今日の体重 (kg):
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="例: 65.5"
            style={{ margin: '0 10px' }}
          />
        </label>
        <button type="submit">記録</button>
      </form>

      <h2>記録一覧</h2>
      {records.length === 0 ? (
        <p>まだ記録がありません。</p>
      ) : (
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              {record.date}: {record.weight}kg
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WeightTracker;
