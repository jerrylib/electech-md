import  { useState } from 'react';

const Tools = () => {
  const [inputText, setInputText] = useState('');
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [copySuccess, setCopySuccess] = useState('');
  const [buttonCopySuccess, setButtonCopySuccess] = useState('');

  const buttonOptions = ['6A', '10A', '16A', '20A', '25A', '32A', '40A', '63A'];

  const copyToClipboard = async (text, type = 'text') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'text') {
        setCopySuccess('已复制!');
        setTimeout(() => setCopySuccess(''), 2000);
      } else {
        setButtonCopySuccess('已复制!');
        setTimeout(() => setButtonCopySuccess(''), 2000);
      }
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const toggleButton = (button) => {
    setSelectedButtons(prev => {
      if (prev.includes(button)) {
        return prev.filter(b => b !== button);
      } else {
        return [...prev, button];
      }
    });
  };

  const getSelectedButtonsText = () => {
    return selectedButtons.join(',');
  };

  const generatedText = `${inputText} Series Miniature Circuit Breaker (MCB)`

  return (
    <div className="tools-page min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">工具页面</h1>
          <p className="text-lg text-gray-600">文本生成和按钮选择工具</p>
        </div>
        
        {/* 文本生成工具 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">文本生成工具</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              输入内容：
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请输入内容..."
            />
          </div>
          
        <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
            生成的文本：
            </label>
            <div className="bg-gray-50 p-3 rounded border">
            <p className="text-gray-800 mb-3">{generatedText}</p>
            <div className="flex items-center gap-2">
                <button
                onClick={() => copyToClipboard(generatedText, 'text')}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                >
                复制
                </button>
                {copySuccess && (
                <span className="text-green-600 text-sm">{copySuccess}</span>
                )}
            </div>
            </div>
        </div>
        </div>

        {/* 按钮选择工具 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">按钮选择工具</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              选择按钮：
            </label>
            <div className="flex flex-wrap gap-2">
              {buttonOptions.map((button) => (
                <button
                  key={button}
                  onClick={() => toggleButton(button)}
                  className={`px-4 py-2 rounded border transition-colors ${
                    selectedButtons.includes(button)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
          
          {selectedButtons.length > 0 && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                已选择的按钮：
              </label>
              <div className="bg-gray-50 p-3 rounded border">
                <p className="text-gray-800 mb-3">{getSelectedButtonsText()}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(getSelectedButtonsText(), 'buttons')}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    复制
                  </button>
                  {buttonCopySuccess && (
                    <span className="text-green-600 text-sm">{buttonCopySuccess}</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">按钮选择工具</h2>
          
          <div className="mb-4">
            
          </div>
          
          
        <div className="mt-4 gap flex">
            <button
                onClick={() => copyToClipboard('Number of Poles')}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                >
                Number of Poles
            </button>
            <button
                onClick={() => copyToClipboard('Rated Current')}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm ml-4 hover:bg-green-700 transition-colors"
                >
                Rated Current
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;