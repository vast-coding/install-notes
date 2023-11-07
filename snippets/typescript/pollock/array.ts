const roles = ['admin', 'user', 'guest'] as const;


type RolesArray = typeof roles;
type Roles = RolesArray[number];
type Roles2 = typeof roles[number];// Roles2 = "admin" | "user" | "guest"
const role2: Roles2 = 'admin';
console.log(role2);
//              ^?   
const role4: Roles = 'admin';
console.log(role4)
//              ^?



/** @internal */
export const ADMONITION_TYPES = ['note', 'tip', 'danger', 'info', 'caution'] as const

/** @internal */
export type TAdmonitionType = (typeof ADMONITION_TYPES)[number]
//              ^?