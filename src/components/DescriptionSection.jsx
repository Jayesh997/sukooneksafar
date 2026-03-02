const DescriptionSection = ({ paragraphs }) => (
  <div className="mb-8 space-y-4">
    {paragraphs.map((text, index) => (
      <p key={index} className="text-gray-700 leading-relaxed">
        {text}
      </p>
    ))}
  </div>
);

export default DescriptionSection;
