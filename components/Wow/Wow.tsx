import * as React from "react";

type Warrior = {
  color: "#23d5ab";
  name: "Warrior";
};

type Class =
  | "Death Knight"
  | "Paladin"
  | "Druid"
  | Warrior
  | "Priest"
  | "Rouge"
  | "Mage"
  | "Hunter"
  | "Shaman"
  | "Warlock";
type Role = "Tank" | "Dps" | "Healer";
type Race =
  | "Human"
  | "Night Elf"
  | "Dwarf"
  | "Gnome"
  | "Undead"
  | "Tauren"
  | "Orc"
  | "Blood Elf";

type Character = {
  id: string;
  name: string;
  class: Class;
  role: Role;
  race: Race;
};

type Guild = {
  id: string;
  name: string;
  server: string;
  roster: Character[];
};

type Raid = {};

type ScheduledRaid = {
  raids: Raid[];
  startTime: Date;
  attendance: {};
};
