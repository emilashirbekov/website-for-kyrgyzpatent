import { menuItems } from '@/shared/constants/constants'
import MenuLink from '@/shared/ui/MenuLink/MenuLink'

const SidebarItem = () => {
	return (
		<ul>
			{menuItems.map(el => (
				<li key={el.label}>
					<span>
						<MenuLink href={el.href} label={el.label} icon={el.icon} />
					</span>
				</li>
			))}
		</ul>
	)
}

export default SidebarItem
