import React, { useState } from 'react';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('hot');

  const menu = {
    hot: [
      { name: 'تركية', price: '8' }, { name: 'كابتشينو', price: '10' },
      { name: 'هوت شوكليت', price: '10' }, { name: 'كورتادو', price: '7' }
    ],
    cold: [
      { name: 'كودرد', price: '11' }, { name: 'موهيتو', price: '8' },
      { name: 'موكا بارد', price: '12' }, { name: 'أيس لاتيه', price: '10' }
    ],
    sweets: [
      { name: 'بان كيك نوتيلا', price: '8' }, { name: 'كريب نوتيلا', price: '8' }
    ]
  };

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '20px' }}>
      
      {/* هيدر ملون */}
      <div style={{ backgroundColor: '#1e1b4b', color: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>TOP 7 COFFEE</h1>
      </div>

      {/* أزرار التنقل */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {['hot', 'cold', 'sweets'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            style={{ 
              padding: '10px 20px', 
              border: 'none', 
              borderRadius: '20px', 
              backgroundColor: activeCategory === cat ? '#b45309' : '#fff',
              color: activeCategory === cat ? '#fff' : '#000',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {cat === 'hot' ? 'ساخن' : cat === 'cold' ? 'بارد' : 'حلويات'}
          </button>
        ))}
      </div>

      {/* القائمة */}
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        {menu[activeCategory].map((item, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedItem(item)}
            style={{ 
              backgroundColor: '#fff', 
              padding: '15px', 
              marginBottom: '10px', 
              borderRadius: '10px', 
              display: 'flex', 
              justifyContent: 'space-between',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
            }}
          >
            <span style={{ fontWeight: 'bold' }}>{item.name}</span>
            <span style={{ color: '#b45309' }}>{item.price} ر.س</span>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة */}
      {selectedItem && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center', width: '80%' }}>
            <h2>{selectedItem.name}</h2>
            <p>السعر: {selectedItem.price} ر.س</p>
            <button onClick={() => setSelectedItem(null)} style={{ padding: '10px 20px', cursor: 'pointer' }}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
