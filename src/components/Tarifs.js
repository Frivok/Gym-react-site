import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Chip, Grid } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import DataTarifs from "./../data/tarifs";
import CardMedia from "@material-ui/core/CardMedia";

const cardStyles = makeStyles((theme) => ({
  card: {
    border: "2px",
    borderRadius: 12,
    "min-width": "24vw",
  },
  cardContent: {
    "min-height": "15vh",
  },
  cardMedia: ({ bgColor = "rgba(0, 0, 0, 0.08)" }) => ({
    height: "7vh",
    clipPath: "polygon(0 0, 100% 0%, 100% 84%, 0% 100%)",
    backgroundColor: bgColor,
  }),
  chips: ({
    bgColor = "rgba(0, 0, 0, 0.08)",
    textColor = "rgb(255,255,255)",
  }) => ({
    backgroundColor: bgColor,
    color: textColor,
  }),
}));

export function TarifCard(props) {
  const { title, description, pricing, color, textColor } = props;

  const styles = cardStyles({ bgColor: color, textColor: textColor });

  return (
    <Card className={styles.card} variant="outlined">
      <CardActionArea>
        <CardMedia className={styles.cardMedia} />
        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="span">
            {title}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary" component="span">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Divider />
        {pricing.map((prop) => (
          <Chip
            className={styles.chips}
            label={`${prop.price}€ /${prop.period}`}
          />
        ))}
      </CardActions>
    </Card>
  );
}

TarifCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pricing: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//tab stuff
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Tarifs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label={"1 an"} {...a11yProps(0)} />
          <Tab label={"6 mois"} {...a11yProps(1)} />
          <Tab label={"3 mois"} {...a11yProps(2)} />
          <Tab label={"1 mois"} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <Typography className="Typo" variant="h3">
        Nos forfaits et tarifs{" "}
      </Typography>
      <TabPanel value={value} index={0}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {DataTarifs.annual.map((t) => (
            <Grid item xs={12} md={4}>
              <TarifCard {...t} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {DataTarifs.semestrial.map((t) => (
            <Grid item xs={12} md={4}>
              <TarifCard {...t} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {DataTarifs.trimestrial.map((t) => (
            <Grid item xs={12} md={4}>
              <TarifCard {...t} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {DataTarifs.mensual.map((t) => (
            <Grid item xs={12} md={4}>
              <TarifCard {...t} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <div className="Typo">
        <Typography component={"span"} variant="h6">
          Badge d'entrée 10 euros. Votre forfait comprend : - L'utilisation des
          2 salles - L'utilisation de toutes les machines de 6H à 23H et 7 jours
          sur 7 - La possibilité de participer à tous les cours collectifs à
          Aire/Lys - L'utilisation de la borne interactive pour les cours avec
          coachs virtuels à Aire/Lys - Un accompagnement individualisé dans
          votre démarche - Une écoute - Des conseils - Il est reconduit
          automatiquement, sauf avis contraire de votre part :-)
        </Typography>
        <Typography component={"span"} variant="h6">
          Pour les forfaits annuels et semestriels, un premier versement à
          l'inscription en chèque ou carte bancaire et le reste par prélèvement
          ou chèque (ou paiement comptant)
        </Typography>
      </div>
    </div>
  );
}

export default Tarifs;
