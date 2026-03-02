const BulletSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="font-serif text-xl mb-3">{title}</h3>
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default BulletSection;
