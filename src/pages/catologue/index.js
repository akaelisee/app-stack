import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Produits from '../../components/produits';
import Header from '../../layout/header';
import Footer from '../../layout/footer';


 // 
 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'black'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    border: '1px solid black',

    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Index = ({data}) => {
  // console.log(data.allMarkdownRemark)
  const classes = useStyles();

  const [inputForm, setInputForm] = useState({ search: ""});
  const [filterProduct, setFilterProduct] = useState([]);

  const handleChange = (e) => {
    setInputForm({
      search: e.target.value
    })
  }

  useEffect(()=> {
      setFilterProduct(
        data.allMarkdownRemark.edges.filter(
          (node) => {
              return node.node.frontmatter.title.toLowerCase().includes( inputForm.search.toLowerCase() )
          }
      )
    )
  }, [inputForm.search, data.allMarkdownRemark.edges])


    return (
      <>

        <div className="catalogue">

            {/* Header */}
            <Header />

            {/* input search */}
            <div className="content-catalogue">
              <div className="catalogue-search">
                <div className={classes.root}>
                  <AppBar position="static" style={{backgroundColor: "white"}}>
                    <Toolbar>
                      <Typography className={classes.title} variant="h6" noWrap>
                        Récherche un produit
                      </Typography>
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                          placeholder="Search…"
                          value={inputForm.search}
                          name="search"
                          onChange={handleChange}
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                    </Toolbar>
                  </AppBar>
                </div>
            </div>

            {/* product-item */}
            <div className="right-catalogue">
                <div className="produits">
                    <div className="title">
                        <p className="title"> Produit</p>
                        <span> {data.allMarkdownRemark.totalCount} Résultats</span>
                    </div>
                    <hr/>
                </div>
                <div className="cards">
                  <div className="produit-item">
                    {
                      filterProduct.map(({node}, index) => {
                        return(
                          <Produits node={node.frontmatter} key={index}/> 
                        )
                      })
                    }
                  </div>
                </div>
            </div>
          </div>

            {/* Footer */}
            <Footer />    
        </div>
      </>
    )
}

export const query = graphql`
query {
  allMarkdownRemark (filter: {fields: {sourceName: {ne: "blog"}}}){
    edges {
      node {
        frontmatter {
          title
          description
          image
          path
          price
        }
        fields {
          sourceName
        }
        fileAbsolutePath
      }
    }
    totalCount
  }
}
`
export default Index