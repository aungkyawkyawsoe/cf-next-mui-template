import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { AppAbility, User } from '@/core/utils/types';

export const defineAbilitiesFor = (user: User | null): AppAbility => {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user) {
    if (user.role === 'admin') {
      can('manage', 'all');
    } else if (user.role === 'editor') {
      can('read', 'all');
      can('create', 'Order');
      can('update', 'Order');
      cannot('delete', 'Order');
    } else {
      can('read', 'Dashboard');
      can('read', 'Order', { org: user.org });
      can('read', 'Logistic', { org: user.org });
      can('read', 'Truck', { org: user.org });
    }
  } else {
    cannot('manage', 'all');
  }

  return build();
};