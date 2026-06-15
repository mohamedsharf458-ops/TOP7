import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // قائمة المنتجات الخاصة بـ Tune7 Café[cite: 1, 2]
  const menuItems = [
    { name: 'سبانيش لاتيه', price: '18', category: 'hot', desc: 'إسبريسو غني مع الحليب المكثف المحلى والحليب الطازج المبخر.', icon: '☕' },
    { name: 'موهيتو بلو بري', price: '15', category: 'cold', desc: 'مزيج منعش من التوت الأزرق، النعناع الطازج، الليمون والصودا.', icon: '🧊' },
    { name: 'كابتشينو', price: '16', category: 'hot', desc: 'مزيج متوازن من الإسبريسو المركز ورغوة الحليب الكريمية الغنية.', icon: '☕' },
    { name: 'أيس لاتيه', price: '16', category: 'cold', desc: 'إسبريسو مثالي يمتزج مع الحليب البارد والثلج لانتعاش فوري.', icon: '🧊' },
    { name: 'حلا الزعفران', price: '22', category: 'sweets', desc: 'كيكة الزعفران الطرية والمشربة بالحليب الغني بنكهة الزعفران الأصلي.', icon: '🍰' },
    { name: 'كيكة الشوكولاتة', price: '20', category: 'sweets', desc: 'طبقات من كيك الشوكولاتة الفاخرة مع صوص الشوكولاتة الداكنة.', icon: '🍰' },
  ];

  const categories = [
    { key: 'all', label: 'الكل', icon: '✨' },
    { key: 'hot', label: 'القهوة الساخنة', icon: '☕' },
    { key: 'cold', label: 'المشروبات الباردة', icon: '🧊' },
    { key: 'sweets', label: 'الحلويات', icon: '🍰' },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.appWrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Cairo', sans-serif; -webkit-tap-highlight-color: transparent; }
        body { background-color: #f8fafc; margin: 0; padding: 0; }
        .category-scrollbar::-webkit-scrollbar { height: 0px; }
      `}</style>

      {/* الهيدر والغلاف العلوي[cite: 1, 2] */}
      <div style={styles.menuHeader}>
        <div style={styles.overlay}></div>
        <div style={styles.headerContent}>
          <div style={styles.restaurantLogo}>☕</div>
          <h1 style={styles.headerTitle}>Tune7 Café</h1>
          <p style={styles.headerSubtitle}>استمتع بمذاق القهوة المختصة وألذ الحلويات</p>
        </div>
      </div>

      {/* صندوق البحث[cite: 1, 2] */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="ابحث عن مشروبك أو حلاك المفضّل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>
      </div>

      {/* شريط الأقسام[cite: 1, 2] */}
      <div className="category-scrollbar" style={styles.categoriesBar}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => { setActiveCategory(cat.key); setSearchTerm(''); }}
            style={{
              ...styles.categoryBtn,
              ...(activeCategory === cat.key ? styles.categoryBtnActive : {})
            }}
          >
            <span style={styles.catIcon}>{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* بطاقات المنيو الأنيقة[cite: 1, 2] */}
      <div style={styles.menuContainer}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <div key={idx} style={styles.menuItem}>
              <div style={styles.itemImageBox}>
                {item.icon}
              </div>
              <div style={styles.itemDetails}>
                <div style={styles.itemTitleRow}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <span style={styles.price}>{item.price} <small style={styles.currency}>ر.س</small></span>
                </div>
                {item.desc && <p style={styles.description}>{item.desc}</p>}
              </div>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>لا توجد أصناف تطابق بحثك حالياً ☕</div>
        )}
      </div>

      {/* زر الواتساب[cite: 1, 2] */}
      <div style={styles.whatsappContainer}>
        <a href="https://wa.me/966556077416" target="_blank" rel="noopener noreferrer" style={styles.whatsappBtn}>
          💬 اطلب الآن عبر الواتساب
        </a>
      </div>
    </div>
  );
}

// التنسيقات المدمجة بالكامل لفرض التصميم[cite: 1, 2]
const styles = {
  appWrapper: { direction: 'rtl', backgroundColor: '#f8fafc', minHeight: '100vh', color: '#2d2d2d', paddingBottom: '40px' },
  menuHeader: { position: 'relative', backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000')", backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', padding: '60px 20px', color: 'white' },
  overlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.65)', zIndex: 1 },
  headerContent: { position: 'relative', zIndex: 2 },
  restaurantLogo: { fontSize: '36px', background: 'white', width: '75px', height: '75px', display: 'flex', alignItems: 'center', justify-content: 'center', borderRadius: '50%', margin: '0 auto 12px auto', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' },
  headerTitle: { fontSize: '28px', fontWeight: '800', marginBottom: '4px' },
  headerSubtitle: { fontSize: '13.5px', opacity: 0.9, fontWeight: '300' },
  searchContainer: { padding: '0 16px', marginTop: '-22px', position: 'relative', zIndex: 10 },
  searchBox: { maxWidth: '500px', margin: '0 auto', position: 'relative', background: 'white', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', border: '1px solid #e2e8f0', overflow: 'hidden' },
  searchInput: { width: '100%', padding: '14px 20px 14px 50px', border: 'none', outline: 'none', fontSize: '14px', direction: 'rtl', textAlign: 'right' },
  searchIcon: { position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: '#94a3b8' },
  categoriesBar: { display: 'flex', justifyContent: 'center', gap: '10px', padding: '25px 16px 15px 16px', maxWidth: '500px', margin: '0 auto', overflowX: 'auto', whiteSpace: 'nowrap' },
  categoryBtn: { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px', border: '1px solid #e2e8f0', backgroundColor: 'white', borderRadius: '25px', fontSize: '13.5px', fontWeight: '700', color: '#475569', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', transition: 'all 0.2s ease' },
  categoryBtnActive: { backgroundColor: '#1e1b4b', color: 'white', borderColor: '#1e1b4b', boxShadow: '0 4px 12px rgba(30, 27, 75, 0.25)' },
  catIcon: { fontSize: '15px' },
  menuContainer: { maxWidth: '500px', margin: '5px auto 90px auto', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '14px' },
  menuItem: { display: 'flex', alignItems: 'center', backgroundColor: '#ffffff', padding: '14px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.02)', gap: '14px', border: '1px solid #f1f5f9' },
  itemImageBox: { width: '55px', height: '55px', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justify-content: 'center', fontSize: '24px', flexShrink: 0, border: '1px solid #e2e8f0' },
  itemDetails: { flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' },
  itemTitleRow: { display: 'flex', justifycontent: 'space-between', alignItems: 'center' },
  itemName: { fontSize: '15px', fontWeight: '700', color: '#111827' },
  price: { fontWeight: '800', color: '#b45309', fontSize: '15px', whiteSpace: 'nowrap' },
  currency: { fontSize: '10px', fontWeight: '600', color: '#6b7280' },
  description: { fontSize: '12px', color: '#6b7280', lineShadow: '1.5', textAlign: 'right' },
  noResults: { textAlign: 'center', padding: '40px', color: '#6b7280', fontSize: '14px', fontWeight: '600' },
  whatsappContainer: { position: 'fixed', bottom: '20px', left: '0', right: '0', zIndex: 1000, display: 'flex', justifyContent: 'center', padding: '0 20px' },
  whatsappBtn: { width: '100%', maxWidth: '468px', backgroundColor: '#25D366', color: 'white', textAlign: 'center', padding: '13px', borderRadius: '30px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)' },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
