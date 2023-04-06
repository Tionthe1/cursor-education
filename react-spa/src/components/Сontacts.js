import React, { useState } from "react";
import Contact from "./Contact.js";

const Contacts = () => {
  const [contacts] = useState([
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    male: true,
    female: true,
    undefined: true,
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    const name = event.target.name;
    setFilters({ ...filters, [name]: !filters[name] });
  };

  const filteredContacts = contacts
    .filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`;
      return (
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        parseInt(contact.phone).toString().includes(search)
      );
    })
    .filter((contact) => {
      if (filters[contact.gender] === undefined) {
        return true;
      }
      return filters[contact.gender];
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <div>
        <input
          type="checkbox"
          checked={filters.male}
          name="male"
          onChange={handleFilterChange}
        />{" "}
        Male
        <input
          type="checkbox"
          checked={filters.female}
          name="female"
          onChange={handleFilterChange}
        />{" "}
        Female
        <input
          type="checkbox"
          checked={filters.undefined}
          name="undefined"
          onChange={handleFilterChange}
        />{" "}
        Not specified
      </div>
      <ul>
        {filteredContacts.map((contact, index) => (
          <Contact key={index} {...contact}>
            {contact.gender && (
              <span style={{ marginLeft: "10px" }}>
                {contact.gender === "male" ? "Ч" : "Ж"}
              </span>
            )}
          </Contact>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
