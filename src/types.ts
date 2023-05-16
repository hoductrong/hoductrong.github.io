export type SideBarItem = {
	name: string;
	childs?: SideBarItem[];
	icon?: any;
	type: 'folder' | 'file';
	onItemClick: (item: SideBarItemClickProps) => void;
};

export type SideBarItemClickProps = Omit<SideBarItem, 'onItemClick'>;
