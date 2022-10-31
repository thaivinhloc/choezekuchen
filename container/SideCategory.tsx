import styled from "styled-components"

const SideCategoryWrapper = styled.div`
  width: 100%;
  a {
    color: rgb(119, 119, 119);
    -webkit-appearance: none;
  }
  border: 1px solid #e7e9eb;
  border-radius: 5px;
  padding: 16px;
  background: #fff;
`

type TSideCategory = {
  categories: TSideCategoryItem[]
  selectedId?: number
  onSelect?: ({
    id,
    slug,
    name
  }: {
    id?: number
    slug?: string
    name?: string
  }) => void
}

type TSideCategoryItem = {
  id: number
  name: string
  count?: number
  slug?: string
  subCategories?: TSideCategoryItem[]
}

const CategoryList = ({ categories, selectedId, onSelect }: TSideCategory) => {
  return (
    <>
      {categories.map(({ id, name, slug, count, subCategories }) =>
        subCategories?.length ? (
          <li>
            {name} ({count})
            <CategoryList categories={subCategories} />
          </li>
        ) : (
          <li onClick={() => onSelect?.({ id, slug, name })}>
            {name} ({count})
          </li>
        )
      )}
    </>
  )
}

const SideCategory: React.FC<TSideCategory> = ({ ...props }) => {
  return (
    <SideCategoryWrapper as='ul'>
      <CategoryList {...props} />
    </SideCategoryWrapper>
  )
}

export default SideCategory
