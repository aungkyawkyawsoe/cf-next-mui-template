import React, { createContext, useContext, ReactNode } from 'react';
import { defineAbilitiesFor } from '@/core/utils/abilities';
import { AppAbility, User } from '@/core/utils/types';

interface AbilityContextProps {
  ability: AppAbility;
}

const AbilityContext = createContext<AbilityContextProps | undefined>(undefined);

export const AbilityProvider = ({ user, children }: { user: User | null; children: ReactNode }) => {
  const ability = defineAbilitiesFor(user);

  return (
    <AbilityContext.Provider value={{ ability }}>
      {children}
    </AbilityContext.Provider>
  );
};

export const useAbility = () => {
  const context = useContext(AbilityContext);
  if (context === undefined) {
    throw new Error('useAbility must be used within an AbilityProvider');
  }
  return context.ability;
};
