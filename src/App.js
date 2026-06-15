import React, { useState } from 'react';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('hot');

  const menu = {
    hot: [
      { name: 'تركية', price: '8/5' }, { name: 'كابتشينو', price: '10/8' },
      { name: 'هوت شوكليت', price: '10/8' }, { name: 'حليب زنجبيل', price: '5/3' },
      { name: 'كورتادو', price: '7' }, { name: 'فلات وايت', price: '7' },
      { name: 'سحلب', price: '8' }, { name: 'شاي كرك', price: '7/5' },
      { name: 'نسكافيه', price: '6/4' }, { name: 'ميكاتو', price: '10/8' },
      { name: 'أسبانيش حار', price: '11/9' }, { name: 'كرمل كابتشينو', price: '11/9' },
      { name: 'ماتشا', price: '12' }, { name: 'توي حار', price: '10/8' },
      { name: 'موكا حار', price: '10/8' }, { name: 'لاتيه', price: '10/8' },
      { name: 'إسبريسو', price: '8/5' }, { name: 'قهوة إيطالي', price: '10/8' },
      { name: 'توي', price: '10/8' }, { name: 'قهوة فرنسي', price: '10/8' },
      { name: 'قهوة اليوم حار', price: '5' }, { name: 'قهوة أمريكية', price: '8' },
      { name: 'v60 حار', price: '8' }
    ],
    cold: [
      { name: 'كودرد', price: '11' }, { name: 'موهيتو', price: '8' },
      { name: 'موكا بارد', price: '12/10' }, { name: 'أيس أمريكاني', price: '10' },
      { name: 'شوكولاته بارد', price: '12/10' }, { name: 'ملك شيك كتكات', price: '14/12' },
      { name: 'ملك شيك مارس', price: '14/12' }, { name: 'ملك شيك كندر', price: '14/12' },
      { name: 'ملك شيك نوتيلا', price: '14/12' }, { name: 'ملك شيك لوتس', price: '14/12' },
      { name: 'ملك شيك OREO', price: '14/12' }, { name: 'ملك شيك سنيكرز', price: '14/12' },
      { name: 'v60 بارد', price: '10' }, { name: 'أيس أسبنيس لاتيه', price: '10/8' },
      { name: 'أيس لاتيه', price: '10/8' }, { name: 'أيس كراميل لاتيه', price: '10/8' },
      { name: 'قهوة اليوم بارد', price: '5' }, { name: 'كركديه بارد', price: '6' },
      { name: 'توي بارد', price: '12/10' }
    ],
    sweets: [
      { name: 'بان كيك نوتيلا', price: '8' }, { name: 'بان كيك مكس', price: '10' },
      { name: 'كريب نوتيلا', price: '8' }, { name: 'كريب مكس', price: '10' },
      { name: 'كيك بارد', price: '12' }, { name: 'كوكيز', price: '6' },
      { name: 'حلا تمر', price: '6' }, { name: 'حلا بندق', price: '8' },
      { name: 'حلا بستاشيو', price: '8' }, { name: 'كرمل', price: '10' },
      { name: 'بلجيكي', price: '12' }, { name: 'حلا بارد', price: '12' }
    ]
  };

  // تغيير الخلفية حسب القسم
  const background = activeCategory === 'cold' 
    ? 'https://images.unsplash.com/photo-1544145945-f2342b27bd40?q=80&w=1000' 
    : 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000';

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Cairo', backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* الهيدر مع تغيير الخلفية */}
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', textAlign: 'center', color: 'white', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
        <h1 style={{ position: 'relative', zIndex: 1 }}>TOP 7 COFFEE</h1>
      </div>

      {/* الأزرار */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '20px' }}>
        {['hot', 'cold', 'sweets'].map(cat => (
          <button onClick={() => setActiveCategory(cat)} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', background: activeCategory === cat ? '#1e1b4b' : '#fff', color: activeCategory === cat ? '#fff' : '#000', cursor: 'pointer', fontWeight: 'bold' }}>
            {cat === 'hot' ? 'ساخن' : cat === 'cold' ? 'بارد' : 'حلويات'}
          </button>
        ))}
      </div>

      {/* القائمة */}
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '0 16px' }}>
        {menu[activeCategory].map((item, index) => (
          <div key={index} onClick={() => setSelectedItem(item)} style={{ background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <span style={{ fontWeight: '600' }}>{item.name}</span>
            <span style={{ color: '#b45309', fontWeight: 'bold' }}>{item.price} ر.س</span>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة */}
      {selectedItem && (
        <div onClick={() => setSelectedItem(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', padding: '30px', borderRadius: '25px', textAlign: 'center', width: '80%', maxWidth: '300px' }}>
            <h2 style={{ marginBottom: '10px' }}>{selectedItem.name}</h2>
            <p style={{ fontSize: '26px', color: '#b45309', fontWeight: '800' }}>{selectedItem.price} ر.س</p>
            <button onClick={() => setSelectedItem(null)} style={{ marginTop: '20px', padding: '10px 30px', borderRadius: '20px', border: 'none', background: '#1e1b4b', color: 'white', cursor: 'pointer' }}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
