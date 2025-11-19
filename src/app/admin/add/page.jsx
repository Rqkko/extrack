"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Users, PlusCircle, Edit2, LogOut } from 'lucide-react';

export default function AddCategory() {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    { name: 'Pink', value: '#f3a7d3' },
    { name: 'Blue', value: '#7b93ff' },
    { name: 'Purple', value: '#c5a3e8' },
    { name: 'Green', value: '#9cd89c' },
    { name: 'Grey', value: '#d4a08a' }
  ];

  const handleSave = async () => {
    if (!categoryName.trim() || !selectedColor) {
      alert('Please enter a category name and select a color');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: categoryName.trim(),
          name: categoryName.trim(),
          color: selectedColor
        })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err.error || "Failed to save category");
        return;
      }

      router.push('/admin/dashboard');
    } catch (err) {
      console.error("Error creating category:", err);
      alert("Something went wrong while saving the category.");
    }
  };

  const handleCancel = () => {
    router.push('/admin/detail');
  };

  const handleLogout = () => {
    router.push('/admin/loginadmin');
  };

  return (
    <div className="flex flex-col bg-[#F8F3ED] min-h-screen">
      {/* Top Header */}
      <div className="relative top-0 z-30 fixed flex justify-start items-center bg-[#945C2B] shadow-md px-6 py-3 w-full">
        <h1 className="font-semibold text-white text-xl">Add Category</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 items-center mt-14 px-6 py-8 pb-24">
        <div className="space-y-6 w-full max-w-lg">
          {/* Category Name Input */}
          <div>
            <label className="block mb-3 font-semibold text-[#945C2B] text-xl">
              Category Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="bg-white px-4 py-3 border-[#945C2B] border-2 rounded-lg w-full text-[#945C2B] text-base focus:outline-none focus:ring-2 focus:ring-[#945C2B]"
              placeholder="Enter category name"
            />
          </div>

          {/* Select Color */}
          <div>
            <h2 className="mb-4 font-semibold text-[#945C2B] text-xl">Select Color</h2>
            <div className="space-y-3">
              {colors.map((color) => (
                <label
                  key={color.name}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      name="color"
                      value={color.value}
                      checked={selectedColor === color.value}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-7 h-7 rounded-full border-3 transition-all ${
                        selectedColor === color.value
                          ? 'border-[#945C2B] scale-110'
                          : 'border-[#945C2B] bg-white'
                      }`}
                    >
                      {selectedColor === color.value && (
                        <div
                          className="rounded-full w-full h-full"
                          style={{ backgroundColor: color.value }}
                        ></div>
                      )}
                    </div>
                  </div>
                  <span className="font-medium text-[#945C2B] text-lg group-hover:text-[#7d4a22]">
                    {color.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6">
            <button
              onClick={handleSave}
              className="flex-1 bg-[#d5853c] hover:bg-[#b96f2f] px-4 py-3 rounded-lg font-bold text-base text-white transition-colors active:scale-95"
            >
              SAVE CATEGORY
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-[#945C2B] hover:bg-[#7d4a22] px-4 py-3 rounded-lg font-bold text-base text-white transition-colors active:scale-95"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
<div className="bottom-0 fixed flex bg-[#E9D6BF] border-[#945C2B] border-t-2 w-full">
  
  {/* Home */}
  <button 
  onClick={() => router.push('/admin/dashboard')}
  className="flex flex-col flex-1 justify-center items-center hover:bg-white py-4 transition-colors active:scale-95"
  >
    <Home size={28} className="text-[#945C2B]" />
  </button>

  {/* Users */}
  <button 
    onClick={() => router.push('/admin/detail')}
    className="flex flex-col flex-1 justify-center items-center hover:bg-white py-4 transition-colors active:scale-95"
  >
    <Users size={28} className="text-[#945C2B]" />
  </button>

  {/* Plus */}
  <button className="flex flex-col flex-1 justify-center items-center bg-white py-4 border-[#945C2B] border-t-4">
    <PlusCircle size={28} className="text-[#945C2B]" />
  </button>

  {/* Pencil */}
  {/* <button 
    onClick={() => router.push('/admin/edit')}
    className="flex flex-col flex-1 justify-center items-center hover:bg-white py-4 transition-colors active:scale-95"
  >
    <Edit2 size={28} className="text-[#945C2B]" />
  </button> */}

  {/* Logout */}
  <button 
    onClick={handleLogout}
    className="flex flex-col flex-1 justify-center items-center hover:bg-white py-4 transition-colors active:scale-95"
  >
    <LogOut size={28} className="text-[#945C2B]" />
  </button>

</div>


    </div>
  );
}
