import { Filter, state } from "@/store/todo";
import React from "react";
import { useSnapshot } from "valtio";

const FILTER_OPTION: Filter[] = ["all", "pending", "completed"];

const Filters = () => {
  const snap = useSnapshot(state);

  const handleSetFilter = (newValue: Filter) => {
    state.filter = newValue;
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {FILTER_OPTION.map((filter) => (
        <React.Fragment key={filter}>
          <input
            type="radio"
            name="filter"
            id={filter}
            value={filter}
            checked={snap.filter === filter}
            onChange={() => handleSetFilter(filter)}
          />
          <label htmlFor={filter}>{filter}</label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Filters;
