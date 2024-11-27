const SizeGuide = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Size Guide</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">Dimension</th>
              <th className="px-4 py-3">Width</th>
              <th className="px-4 py-3">Height</th>
              <th className="px-4 py-3">Depth</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3">Product</td>
              <td className="px-4 py-3">{product.width}cm</td>
              <td className="px-4 py-3">{product.height}cm</td>
              <td className="px-4 py-3">{product.depth}cm</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Package</td>
              <td className="px-4 py-3">{product.package_width}cm</td>
              <td className="px-4 py-3">{product.package_height}cm</td>
              <td className="px-4 py-3">{product.package_depth}cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeGuide;
