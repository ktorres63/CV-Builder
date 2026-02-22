import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { GeneralInfo, Education, Experience } from "../../types/cv";

type Props = {
  generalInfo: GeneralInfo;
  educations: Education[];
  experiences: Experience[];
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 3,
  },

  thinLine: {
    borderBottomWidth: 4,
    borderBottomColor: "#000",
    marginBottom: 12,
  },

  header: {
    textAlign: "center",
    marginBottom: 8,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 6,
  },

  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    fontSize: 11,
    marginBottom: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 8,
  },

  sectionLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 8,
  },

  text: {
    fontSize: 11,
    marginBottom: 3,
  },

  educationItem: {
    marginBottom: 10,
  },

  educationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftColumn: {
    flexDirection: "column",
  },

  rightColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  experienceItem: {
    marginBottom: 12,
  },
});

function CvDocument({ generalInfo, educations, experiences }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Top Line */}
        <View style={styles.line} />

        {/* Name */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {generalInfo.name ? generalInfo.name.toUpperCase() : "YOUR NAME"}
          </Text>
        </View>

        {/* Double Line */}
        <View style={styles.line} />
        <View style={styles.thinLine} />

        {/* Contact */}
        <View style={styles.contactRow}>
          <Text>
            {"\u2022"} {generalInfo.email}
          </Text>
          <Text>
            {"\u2022"} {generalInfo.phone}
          </Text>
        </View>

        {/* Resume Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />
          <Text style={styles.sectionTitle}>Resume</Text>
          <View style={styles.sectionLine} />
        </View>

        <Text style={styles.text}>{generalInfo.resume}</Text>

        {/* Education Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.sectionLine} />
        </View>

        {educations.map((item) => (
          <View key={item.id} style={styles.educationItem}>
            <View style={styles.educationRow}>
              <View style={styles.leftColumn}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {item.degree}
                </Text>
                <Text style={styles.text}>{item.school}</Text>
              </View>

              <View style={styles.rightColumn}>
                <Text style={styles.text}>{item.location}</Text>
                <Text style={styles.text}>
                  {item.startDate} - {item.endDate}
                </Text>
              </View>
            </View>
          </View>
        ))}

        {/* Experience Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.sectionLine} />
        </View>

        {experiences.map((item) => (
          <View key={item.id} style={styles.experienceItem}>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              {item.position}
            </Text>
            <Text style={styles.text}>{item.company}</Text>
            <Text style={styles.text}>
              {item.startDate} - {item.endDate}
            </Text>
            <Text style={{ fontSize: 11, marginTop: 4 }}>{item.resume}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default CvDocument;
