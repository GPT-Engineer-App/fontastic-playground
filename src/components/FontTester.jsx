import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const fonts = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Palatino",
  "Garamond",
  "Bookman",
  "Comic Sans MS",
  "Trebuchet MS",
  "Arial Black",
  "Impact"
];

const FontTester = () => {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [text, setText] = useState("Type your text here");
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="font-select" className="block text-sm font-medium text-gray-700">
          Select Font
        </label>
        <Select onValueChange={setSelectedFont} defaultValue={selectedFont}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700">
          Enter Text
        </label>
        <Input
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="font-size" className="block text-sm font-medium text-gray-700">
          Font Size: {fontSize}px
        </label>
        <Slider
          id="font-size"
          min={8}
          max={72}
          step={1}
          value={[fontSize]}
          onValueChange={(value) => setFontSize(value[0])}
        />
      </div>

      <div className="mt-6 p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-2">Preview:</h3>
        <p style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default FontTester;