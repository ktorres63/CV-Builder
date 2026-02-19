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
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
  },
});

function CvDocument({ generalInfo, educations, experiences }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{generalInfo.name || "Your Name"}</Text>
          <Text style={styles.text}>{generalInfo.email}</Text>
          <Text style={styles.text}>{generalInfo.phone}</Text>
        </View>

        {/* Education */}
        <Text style={styles.sectionTitle}>Education</Text>
        {/*{educations.map((edu) => (
          <View key={edu.id}>
            <Text style={styles.text}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.school}</Text>
            <Text style={styles.text}>{edu.year}</Text>
          </View>
        ))}*/}

        {/* Experience */}
        <Text style={styles.sectionTitle}>Experience</Text>
        {/*{experiences.map((exp) => (
          <View key={exp.id}>
            <Text style={styles.text}>{exp.position}</Text>
            <Text style={styles.text}>{exp.company}</Text>
            <Text style={styles.text}>
              {exp.from} - {exp.to}
            </Text>
          </View>
        ))}*/}
      </Page>
    </Document>
  );
}

export default CvDocument;
