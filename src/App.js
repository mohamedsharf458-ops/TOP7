import React, { useState } from 'react';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('hot');

  const menu = {
    hot: [
      { name: 'تركية', price: '8/5' }, { name: 'كابتشينو', price: '10/8' },
      { name: 'هوت شوكليت', price: '10/8' }, { name: 'كورتادو', price: '7' },
      { name: 'فلات وايت', price: '7' }, { name: 'شاي كرك', price: '7/5' }
    ],
    cold: [
      { name: 'كودرد', price: '11' }, { name: 'موهيتو', price: '8' },
      { name: 'موكا بارد', price: '12/10' }, { name: 'أيس لاتيه', price: '10/8' },
      { name: 'أيس كراميل لاتيه', price: '10/8' }, { name: 'توي بارد', price: '12/10' }
    ],
    sweets: [
      { name: 'بان كيك نوتيلا', price: '8' }, { name: 'كريب نوتيلا', price: '8' },
      { name: 'كيك بارد', price: '12' }, { name: 'حلا بستاشيو', price: '8' }
    ]
  };

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Cairo, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* هيدر جديد تماماً بدون صور خلفية تجنباً للمشاكل */}
      <div style={{ backgroundColor: activeCategory === 'cold' ? '#0ea5e9' : '#1e1b4b', padding: '60px 20px', textAlign: 'center', color: 'white', transition: '0.5s' }}>
        <h1 style={{ margin: 0 }}>TOP 7 COFFEE</h1>
        <p style={{ opacity: 0.8, marginTop: '10px' }}>{activeCategory === 'cold' ? 'مشروبات باردة ومنعشة' : 'قهوة مختصة ومشروبات ساخنة'}</p>
      </div>

      {/* الأزرار */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '20px' }}>
        {['hot', 'cold', 'sweets'].map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', background: activeCategory === cat ? '#333' : '#fff', color: activeCategory === cat ? '#fff' : '#000', cursor: 'pointer', fontWeight: 'bold' }}>
            {cat === 'hot' ? 'ساخن' : cat === 'cold' ? 'بارد' : 'حلويات'}
          </button>
        ))}
      </div>

      {/* القائمة */}
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '0 16px' }}>
        {menu[activeCategory].map((item, index) => (
          <div key={index} onClick={() => setSelectedItem(item)} style={{ background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <span style={{ fontWeight: '600' }}>{item.name}</span>
            <span style={{ color: '#b45309', fontWeight: 'bold' }}>{item.price} ر.س</span>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة */}
      {selectedItem && (
        <div onClick={() => setSelectedItem(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', padding: '30px', borderRadius: '25px', textAlign: 'center', width: '80%', maxWidth: '300px' }}>
            <h2>{selectedItem.name}</h2>
            <p style={{ fontSize: '24px', color: '#b45309', fontWeight: '800' }}>{selectedItem.price} ر.س</p>
            <button onClick={() => setSelectedItem(null)} style={{ marginTop: '20px', padding: '10px 30px', borderRadius: '20px', border: 'none', background: '#333', color: 'white', cursor: 'pointer' }}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
