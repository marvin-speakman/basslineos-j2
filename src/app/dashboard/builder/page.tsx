"use client";

import { DndContext } from '@dnd-kit/core';
// More imports will be needed for droppable/draggable components

export default function PageBuilderPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Page Builder</h1>
      <DndContext>
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar with draggable components */}
          <div className="col-span-3 bg-secondary rounded-lg p-4">
            <h2 className="font-bold text-white mb-4">Components</h2>
            <div className="space-y-2">
                <div className="bg-background p-3 rounded-lg cursor-grab">Text Block</div>
                <div className="bg-background p-3 rounded-lg cursor-grab">Image</div>
                <div className="bg-background p-3 rounded-lg cursor-grab">Video Embed</div>
            </div>
          </div>

          {/* Canvas for dropping components */}
          <div className="col-span-9 bg-background rounded-lg min-h-[600px] p-4 border border-dashed border-gray-600">
            <p className="text-text-secondary text-center">Drop components here</p>
          </div>
        </div>
      </DndContext>
    </div>
  );
}
