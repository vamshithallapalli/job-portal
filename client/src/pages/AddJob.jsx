import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("location");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Full Time");
  const [salary, setSalary] = useState("");

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    //intialize quill editor only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Enter job description",
      });

      // Listen for text changes and update description state
      quillRef.current.on("text-change", () => {
        setDescription(quillRef.current.root.innerHTML);
      });
    }
  }, []);
  return (
    <form className="container p-4 flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
          type="text"
          value={title}
          placeholder="Enter job title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setCategory(e.target.value)}
          >
            {JobCategories.map((jobCat, index) => (
              <option key={index} value={jobCat}>
                {jobCat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLocation(e.target.value)}
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2">Job Level</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2">Salary</p>
        <input
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          type="number"
          placeholder="25000"
          min={0}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white rounded">
        ADD
      </button>
    </form>
  );
};

export default AddJob;
