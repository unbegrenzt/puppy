import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type TabBarIconProps = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
  size: number;
};
